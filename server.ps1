$root = "C:\Users\Santiago\Documents\GorillaPrep"
$port = 8420
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Output "Serving $root on http://localhost:$port/"

$mime = @{
  ".html" = "text/html; charset=utf-8"; ".js" = "application/javascript"; ".json" = "application/json";
  ".css" = "text/css"; ".png" = "image/png"; ".svg" = "image/svg+xml"; ".ico" = "image/x-icon"
}

while ($listener.IsListening) {
  $res = $null
  $aborted = $false
  try {
    $context = $listener.GetContext()
    $req = $context.Request
    $res = $context.Response
    $res.KeepAlive = $false
    $path = $req.Url.LocalPath
    if ($path -eq "/") { $path = "/index.html" }
    $filePath = Join-Path $root ($path.TrimStart("/"))
    if ($req.HttpMethod -eq "HEAD") {
      $res.Close()
      continue
    }
    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath)
      $ct = $mime[$ext]
      if (-not $ct) { $ct = "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $res.ContentType = $ct
      $res.ContentLength64 = [int64]$bytes.LongLength
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $res.StatusCode = 404
      $msg = [System.Text.Encoding]::UTF8.GetBytes("Not found")
      $res.ContentLength64 = [int64]$msg.Length
      $res.OutputStream.Write($msg, 0, $msg.Length)
    }
  } catch {
    Write-Output "Request error: $_"
    $aborted = $true
    try { $res.Abort() } catch {}
  } finally {
    if (-not $aborted -and $res) {
      try { $res.OutputStream.Close() } catch {}
      try { $res.Close() } catch {}
    }
  }
}
