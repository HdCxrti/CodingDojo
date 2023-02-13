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

```html
<a href="https://www.google.com">Click here to go to Google</a>
<a href="https://www.google.com">
  <img src="" />
</a>
```

### Unordered List

```html
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

```html
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

```html
<label for="first_name">First Name:</label>
<input type="text" id="first_name" name="first_name" />
<label for="last_name">Last Name:</label>
<input type="text" id="last_name" name="last_name" />
<label for="email">Email:</label>
<input type="text" id="email" name="email" />
```

### Input Password

```html
<label for="password">Password</label>
<input type="password" id="password" name="password" />
```

### Dropdown Menu

```html
<select name="gender">
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="decline">Prefer not to say</option>
</select>
```

### CheckBoxes

```html
<label for="blue">Blue</label>
<input type="checkbox" id="blue" name="color" value="blue" />
<label for="green">Green</label>
<input type="checkbox" id="green" name="color" value="green" />
<label for="red">Red</label>
<input type="checkbox" id="red" name="color" value="red" />
<label for="black">Black</label>
<input type="checkbox" id="black" name="color" value="black" />
<label for="purple">Purple</label>
<input type="checkbox" id="purple" name="color" value="purple" />
```

### Longer Text

```html
<textarea name="description"></textarea>
```

### Submit Button!

```html
<input type="submit" value="Submit" />
```

### Full Registration Form

```html
<form action="process.php" method="post">
  <p>Please Register</p>
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name" name="first_name" />

  <label for="last_name">Last Name:</label>
  <input type="text" id="last_name" name="last_name" />

  <label for="email">Email:</label>
  <input type="text" id="email" name="email" />

  <p>Select your gender:</p>
  <label for="male">Male</label>
  <input type="radio" id="male" name="gender" value="male" />

  <label for="female">Female</label>
  <input type="radio" id="female" name="gender" value="female" />

  <label for="decline">Prefer not to say</label>
  <input type="radio" id="decline" name="gender" value="decline" />

  <p>Select 3 of your favorite colors:</p>
  <label for="blue">Blue</label>
  <input type="checkbox" id="blue" name="color" value="blue" />

  <label for="green">Green</label>
  <input type="checkbox" id="green" name="color" value="green" />

  <label for="red">Red</label>
  <input type="checkbox" id="red" name="color" value="red" />

  <label for="black">Black</label>
  <input type="checkbox" id="black" name="color" value="black" />

  <label for="purple">Purple</label>
  <input type="checkbox" id="purple" name="color" value="Purple" />

  <p>Say a few words about yourself:</p>
  <textarea name="description"></textarea>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" />
  <label for="pw_confirm">Password Confirmation:</label>
  <input type="password" id="pw_confirm" name="password_confirmation" />

  <input type="submit" value="Click here to register" />
</form>
```

### Label Input Declaration

```html
<form>
  <p>Please Register</p>
  <label> Name:<input type="text" name="name" /> </label>
  <p>Select your gender:</p>
  <label> Male<input type="radio" name="gender" value="male" /> </label>
  <label> Female<input type="radio" name="gender" value="female" /> </label>
  <label>
    Prefer not to say<input type="radio" name="gender" value="decline" />
  </label>
  <p>For security, enter your password.</p>
  <label> Password:<input type="password" name="password" /> </label>
  <input type="submit" value="Click here to register" />
</form>
```

### Adding Audio

```html
<audio src="desperado.mp3"></audio>
```

### Adding Audio (autoplay)

```html
<audio src="desperado.mp3" autoplay></audio>
```

### Adding Audio (autoplay)

```html
<audio src="desperado.mp3" autoplay></audio>
```

### Adding Audio (autoplay loop)

```html
<audio src="desperado.mp3" autoplay loop></audio>
```

### Adding Audio with controls

```html
<audio src="desperado.mp3" controls></audio>
```

### Adding Audio that supports all browsers

```html
<audio controls>
  <source src="desperado.ogg" />
  <source src="desperado.mp3" />
</audio>
```

### Adding Video

```html
<video src="caddyshack.mp4" width="400" height="800" controls></video>
```

### Adding Video that supports all browsers

```html
<video width="400" height="200" poster="picture.jpg" controls>
  <source src="caddyshack.ogv" />
  <source src="movie.mp4" />
</video>
```

### Adding a Canvas

```html
<canvas id="work_of_art" width="400" height="200">
  <p>Your browser does not support canvas</p>
</canvas>
```

### Applying display flex

```css
#dojo {
  width: 500px;
  height: 200px;
  background-color: grey;
  display: flex; /* this line is new! */
}
```

### Fixing the stretch

```css
#dojo {
  width: 500px;
  height: 200px;
  background-color: grey;
  display: flex;
  align-items: center; /* this line is new! */
}
```

### Justify Content - Flex-Start

```css
#dojo {
  width: 500px;
  height: 200px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* this line is new */
}
```

### Justify Content - Center

```css
#dojo {
  width: 500px;
  height: 200px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Justify Content - Flex end

```css
#dojo {
  width: 500px;
  height: 200px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
```

### Justify Content - Space between

```css
#dojo {
  width: 500px;
  height: 200px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### Justify Content - Space evenly

```css
#dojo {
  width: 500px;
  height: 200px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
```

### Justify Content - Space around

```css
#dojo {
  width: 500px;
  height: 200px;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

### The Flex Shorthand

```html
<div class="row">
  <div class="col">Column</div>
  <div class="col">Column</div>
</div>
<style>
  .row {
    display: flex;
  }
  .col {
    flex: 1;
    padding: 20px;
    margin: 10px;
    background-color: lightcyan;
  }
</style>
```

### Cheaterbar

```css
.cheater-bar {
  background-image: url("../Images/CheaterBar.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100px;
  width: calc(100vw);
}
```

### CSS Reset

Here is a great explanation of what CSS resets are, why we use them, and some examples:

http://perishablepress.com/a-killer-collection-of-global-css-reset-styles/

### Adjust image with and height

```html
<img src="___" width="___" height="___" />
```
