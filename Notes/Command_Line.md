# Command line notes
## PowerShell Cheat Sheet

### Copy and paste file
```ps
Copy-Item -Path C:\boot.ini -Destination C:\boot.bak
```
### Remove file 
```ps
Remove-Item -Path "style.css"
```
### Moving File to different directory
```ps
Move-Item -Path .\index_2.html -Destination destination
```
### Copy and rename file
```ps
Copy-Item -Path .\index.html -Destination .\index_2.html
```
### Creating
```ps
Copy-Item -Path .\index.html -Destination .\index_2.html
```