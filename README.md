# SAuth
SAuth - a little web-application which demonstrates implementation of social authentication (Google OAuth as an example) with Django Rest Framework and React.

<h2>Installation</h2>
Create project folder, setup and activate virtual environment:
<pre>
mkdir project
cd project
python3.8.5 -m venv env
. env/bin/activate
</pre>
Clone this repository and install requirements:
<pre>
git clone https://github.com/vladkomudrich/react-django-socialAuth
cd react-django-socialAuth
pip install -r requirements.txt
</pre>
Install dependencies for React-Application:
<pre>
cd sauth-web
yarn install
</pre>
<h2> Setting Up Backend</h2>
<p><a href="https://djecrety.ir/">Generate</a> and provide your own <b>Django-SECRET_KEY</b>:</p>
<pre>SECRET_KEY = 'your own SECRET_KEY'</pre>
<p>Get <b>CLIENT_ID</b> and <b>SECRET_KEY</b> from https://console.developers.google.com in <i>sauth/settings.py</i>: <a href="https://github.com/wagnerdelima/drf-social-oauth2">(learn more)</a></p>
<pre>
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = 'your client_id'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = 'your secret_key'
</pre>
<p>Make migrations and create superuser:</p>
<pre>
python manage.py makemigrations users profiles
python manage.py migrate
python manage.py createsuperuser
</pre>
<p>Run server, login Django Admin and set up DJANGO OAUTH TOOLKIT/Applications</p>
  <ul>
    <li>Add application</li>
    <li>User: 1</li>
    <li>Client-type: Confidential</li>
    <li>Authorization grant type: Resource owner password-based</li>
  </ul>
<p>Learn more about social authentication with Django Rest Framework <a href="https://github.com/wagnerdelima/drf-social-oauth2">drf-social-oauth2</a>
<h2>Setting Up Frontend</h2>
<p>In React we are using special component <a href="https://yarnpkg.com/package/react-google-login">react-google-login</a> in which we must put <b>Client ID</b> from Google OAuth. In sauth-web/src/components/Login.js provide clientID in GoogleLogin component. When you login it calls googleLogin function in which we must put <i>client_id</i> and <i>secret_key</i> from Django Admin -> DJANGO OAUTH TOOLKIT -> Applications -> Your application. This function converts token from google and set <i>access_token</i> and <i>refresh_token</i> to localStorage.</p>
<h2>Launch</h2>
<pre>
python manage.py runserver
yarn start
</pre>