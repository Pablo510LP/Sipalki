param (
    [string]$InputPath,
    [string]$OutputPath
)

$content = Get-Content -Path $InputPath -Raw
$content = $content -replace '<script[\s\S]*?</script>', ''
$content = $content -replace '<style[\s\S]*?</style>', ''

$matches = [regex]::Matches($content, '>([^<]+)<')
$extracted = foreach ($m in $matches) {
    $val = $m.Groups[1].Value.Trim()
    if ($val -and $val.Length -gt 1) {
        $val
    }
}

$extracted | Select-Object -Unique | Out-File -FilePath $OutputPath -Encoding utf8
Write-Host "Extracted text to $OutputPath"
