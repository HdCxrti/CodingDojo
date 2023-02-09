# Notes

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

### Input Text

```ps
<label for="first_name">First Name:</label>
<input type="text" id="first_name" name="first_name">
<label for="last_name">Last Name:</label>
<input type="text" id="last_name" name="last_name">
<label for="email">Email:</label>
<input type="text" id="email" name="email">
```

### Input Password

```ps
<label for="password">Password</label>
<input type="password" id="password" name="password">
```

### Dropdown Menu

```ps
<select name="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="decline">Prefer not to say</option>
</select>
```

### CheckBoxes

```ps
<label for="blue">Blue</label>
<input type="checkbox" id="blue" name="color" value="blue">
<label for="green">Green</label>
<input type="checkbox" id="green" name="color" value="green">
<label for="red">Red</label>
<input type="checkbox" id="red" name="color" value="red">
<label for="black">Black</label>
<input type="checkbox" id="black" name="color" value="black">
<label for="purple">Purple</label>
<input type="checkbox" id="purple" name="color" value="purple">
```

### Longer Text

```ps
<textarea name="description"></textarea>
```

### Submit Button!

```ps
<input type="submit" value="Submit">
```

### Full Registration Form

```ps
<form action="process.php" method="post">
    <p>Please Register</p>
    <label for="first_name">First Name:</label>
    <input type="text" id="first_name" name="first_name">

    <label for="last_name">Last Name:</label>
    <input type="text" id="last_name" name="last_name">

    <label for="email">Email:</label>
    <input type="text" id="email" name="email">

    <p>Select your gender:</p>
    <label for="male">Male</label>
    <input type="radio" id="male" name="gender" value="male">

    <label for="female">Female</label>
    <input type="radio" id="female" name="gender" value="female">

    <label for="decline">Prefer not to say</label>
    <input type="radio" id="decline" name="gender" value="decline">

    <p>Select 3 of your favorite colors:</p>
    <label for="blue">Blue</label>
    <input type="checkbox" id="blue" name="color" value="blue">

    <label for="green">Green</label>
    <input type="checkbox" id="green" name="color" value="green">

    <label for="red">Red</label>
    <input type="checkbox" id="red" name="color" value="red">

    <label for="black">Black</label>
    <input type="checkbox" id="black" name="color" value="black">

    <label for="purple">Purple</label>
    <input type="checkbox" id="purple" name="color" value="Purple">

    <p>Say a few words about yourself:</p>
    <textarea name="description"></textarea>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
   <label for="pw_confirm">Password Confirmation:</label>
   <input type="password" id="pw_confirm" name="password_confirmation">

   <input type="submit" value="Click here to register">
</form>
```

### Label Input Declaration

```ps
<form>
    <p>Please Register</p>
    <label>
        Name:<input type="text" name="name">
    </label>
    <p>Select your gender:</p>
    <label>
       Male<input type="radio" name="gender" value="male">
    </label>
    <label>
       Female<input type="radio" name="gender" value="female">
    </label>
    <label>
       Prefer not to say<input type="radio" name="gender" value="decline">
    </label>
    <p>For security, enter your password.</p>
    <label>
        Password:<input type="password" name="password">
    </label>
    <input type="submit" value="Click here to register">
</form>
```

### Adding Audio

```ps
<audio src="desperado.mp3">
</audio>
```

### Adding Audio (autoplay)

```ps
<audio src="desperado.mp3" autoplay>
</audio>
```

### Adding Audio (autoplay)

```ps
<audio src="desperado.mp3" autoplay>
</audio>
```

### Adding Audio (autoplay loop)

```ps
<audio src="desperado.mp3" autoplay loop>
</audio>
```

### Adding Audio with controls

```ps
<audio src="desperado.mp3" controls>
</audio>
```

### Adding Audio that supports all browsers

```ps
<audio controls>
    <source src="desperado.ogg">
    <source src="desperado.mp3">
</audio>
```

### Adding Video

```ps
<video src="caddyshack.mp4" width="400" height="800" controls>
</video>
```

### Adding Video that supports all browsers

```ps
<video width="400" height="200" poster="picture.jpg" controls>
    <source src="caddyshack.ogv">
    <source src="movie.mp4">
</video>
```

### Adding a Canvas

```ps
<canvas id="work_of_art" width="400" height="200">
    <p>Your browser does not support canvas</p>
</canvas>
```
