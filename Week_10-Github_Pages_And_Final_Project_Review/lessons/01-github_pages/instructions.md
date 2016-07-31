# Github Pages Howto


## Basic Repo Creation

1. Go to [https://github.com/](https://github.com/)

2. Login

3. Find the button for "New Repository" and click it.

4. In the "Repository Name" field, enter: `YOURUSERNAME.github.io`.
   The `YOURUSERNAME` part should be the username that is displayed
   in the dropdown field under the word "Owner".

5. Sometimes you may want to use a private repository.  But in the case
   of the Final Project, you will want it to be a public repository.
   So, select the option for "Public".

6. Click the button "Create Repository".  This will create the repo, and
   redirect you to the repo main page.

7. You should see a button that says "Setup In Desktop".
   Click that button.  This should open the repo in the
   Github Desktop Application.


## Cloning Into Github Desktop

1. Go to the Github Desktop Application.  After performing step #7
   in the previous section, you should see that it will ask you for a location
   where to store the repo on your local.  For now, select to have it
   stored on your Desktop.


## Copying Files Into Your Github Pages Repo

1. Up until now, we have been keeping the final project
   in the personal repo, "ga-fewd-20-assignments".  We will want
   to move the final project from that repo, into our new Github Pages
   repo.  So, assuming your final project was at something like
   `Desktop/ga-fewd-20-assignments/FinalProject` (Unless you named it something else),
   move the contents of `FinalProject` into the root of `Desktop/YOURUSERNAME.github.io`.

2. Now you should have an empty directory `Desktop/ga-fewd-20-assignments/FinalProject`.
   You can now remove this directory.

3. Go into Github Desktop Application.  Select your `ga-fewd-20-assignments` repo,
   and make a commit to indicate that you moved the files out of that repo into a
   new repo.  Do not forget to hit the "Sync" button after you make the commit.


## Restructuring The Files In Your Github Pages Repo

1. Github Pages requires that your starting page be called
   `index.html`.  So, rename your starting file to `index.html`.


## Uploading Code To Github

1. Now, you should be ready to commit and push your changes to
   your new repo.  Open the Github Desktop Application.  Select
   the new repo "YOURUSERNAME.github.io".  Make a commit and sync.


## Testing Your New Domain

1. Let's test our changes so far.  Go to this website, except you will
   need to replace `YOURUSERNAME` with your own username:
   [https://YOURUSERNAME.github.io/](https://YOURUSERNAME.github.io/)
   Hopefully, you should see everything working correctly.  If not, you
   will need to go back to previous steps and check your work.


## Purchasing Custom Domain On Namecheap

1. Go to [https://namecheap.com/](https://namecheap.com/).

2. At the top, if you have an account, click "Sign In", to login.
   If you do not have an account, click "Sign Up" to create an account.
   Enter all the appropriate fields, and submit the form to signup.
   Once you have created an account, you may be asked to login.  You should
   then do so.

3. Once you are logged in, at the top, click "Domains", then click "Registration".

4. Search for the domain you want.  You will be given a list of results.  If you want the
   really cheap domains, you can click "$0.88 Domains."

5. Select the domain you wish to purchase.

6. Click "View Cart" on the right sidebar.  You will be taken to the cart page.

7. If you do not want your domain to be auto-renewed, unselect the "Auto Renew" option.

8. You should make sure that the "WhoisGuard" option is selected, as well as the "Auto Renew"
   for WhoisGuard.

9. You do not need to enable "Premium DNS".

10. On the right sidebar, select "Confirm Order".

11. Go through the payment process to pay for your order.  I prefer to use PayPal, so you do not
    need to add your credit card.

12. Once you have completed the purchase, you will be taken to the "Thank You"
    page.  At the top, click your username, then click the "Dashboard" link.
    This will take you to your Dashboard.


## Setting Up Namecheap DNS

1. On your dashboard page, find your new domain, and click the "Manage"
   button for it.

2. Click on the nav tab "Advanced DNS".

3. Find the section "Host Records".

4. Click "Add New Record"

5. Select "A Record"

6. For "Host", enter `@`.  For "IP Address", enter `192.30.252.153`.

7. Click the checkmark icon to save changes.

8. Click "Add New Record"

9. Select "A Record"

10. For "Host", enter `@`.  For "IP Address", enter `192.30.252.154`.

11. Click the checkmark icon to save changes.

12. Click "Add New Record"

13. Select "CNAME Record".

14. For "Host", enter `www`.  For "Target", enter your domain name that you
    purchased.

15. Click the checkmark to save changes.

16. Click the trash can icons for the 2 entries that you DID NOT create.



## Specifying a Custom Domain In Github

1. Go to "https://github.com/".  Make sure you are logged in.

2. Under "Your Repositories", find your Github Pages repository,
   which is called something like `YOURUSERNAME.github.io`.  Click
   on that repository.

3. In the nav area for the repo, click the "Settings" button.

4. Scroll down until you see the section "Github Pages".

5. In the field for "Custom Domain", enter a custom domain

6. Click the "Save" button.


## Testing Your Custom Domain

1. It could take a few hours to see your custom domain activate.
   You might need to be patient.

2. Try visiting your domain in the browser.

