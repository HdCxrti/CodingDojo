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
### Adding a Link
```ps
<a href="https://www.google.com">Click here to go to Google</a>
<a href="https://www.google.com">
    <img src="">
</a>
```
### Unordered List
```ps
<ul>
    <li>
        <a href="home.html">Home</a>
    </li>
    <li>
        <a href="about.html">About</a>
    </li>
    <li>
        <a href="contact_us.html">Contact Us</a>
    </li>
</ul>
```
### Tables
```ps
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Sample Name</td>
            <td>an_email@gmail.com</td>
            <td>555-5555</td>
        </tr>
        <tr>
            <td>Another Name</td>
            <td>another_email@gmail.com</td>
            <td>444-4444</td>
        </tr>
    </tbody>
</table>
```
