<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- META TAGS -->

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Squish</title>

    <!-- LINKS -->

    <link rel="stylesheet" href="/public/css/reset.css" />
    <link rel="stylesheet" href="/public/css/style.css" />

    <!-- Scripts -->
    <script src="https://code.iconify.design/iconify-icon/1.0.0-beta.3/iconify-icon.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="/public/js/menu.js"></script>
  </head>
  <body>
    <!-- HAMBURGER MENU -->
    <div class="menu-container">
      <div class="menu-wrapper">
        <div id="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <!-- hamburger-menu -->
      </div>
      <!-- menu-wrapper -->

      <ul class="menu-list accordion">
        <li class="accordion-toggle nav1">
          <a class="menu-link" href="/views/index.ejs">Home</a>
        </li>
        <li class="accordion-toggle nav2">
          <a class="menu-link" href="/views/dashboard.ejs">Dashboard</a>
        </li>
        <li class="toggle accordion-toggle nav3">
          <a class="menu-link" href="/views/entry.ejs">Journal</a>
        </li>
        <li class="toggle accordion-toggle nav4">
          <a class="menu-link" href="/logout">Logout</a>
        </li>
        <!-- <li class="toggle accordion-toggle nav5">
          <a class="menu-link" href="/logout">Logout</a>
        </li> -->
      </ul>
    </div>

    <!-- DASHBOARD BODY -->

    <!--LOGO-->
    <section class="homePage">
      <div class="icon">
        <img src="./images/logo.png" alt="logo" />
      </div>

      <!-- LOGIN -->
      <div class="">
        <form action="/" method="get" class="login-info">
          <div class="login">
            <label for="email">Email:</label>
            <br />
            <input type="text" name="email" />
          </div>
          <div class="login">
            <label for="password">Password:</label>
            <br />
            <input type="text" name="password" />
          </div>
          <div class="login login-button" id="">
            <input type="submit" value="Signup" />
          </div>
          <div class="login login-button">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </section>
  </body>
</html>
