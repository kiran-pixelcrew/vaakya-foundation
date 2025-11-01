# Quick Start - Admin Video Management

## 🚀 Make Yourself an Admin (5 minutes)

### Step 1: Create Your Account

1. Run `bun dev`
2. Go to `http://localhost:3000`
3. Click **Sign Up** in the navbar
4. Create your account (use email or Google/GitHub)

### Step 2: Set Admin Role in Clerk

1. Go to https://dashboard.clerk.com/
2. Sign in to your Clerk account
3. Select your application
4. Click **Users** in the sidebar
5. Find your user (the one you just created)
6. Click on your user
7. Scroll to **Public metadata** section
8. Click **Edit**
9. Paste this JSON:
   ```json
   {
     "role": "admin"
   }
   ```
10. Click **Save**

### Step 3: Refresh & Test

1. Go back to your website
2. **Sign out** (click your profile picture → Sign Out)
3. **Sign back in** (this refreshes your session)
4. Navigate to the homepage
5. Scroll to the video section
6. 🎉 You should now see **Edit Video** and **Delete Video** buttons!

---

## 🎥 How to Change the Video

### Option A: YouTube Video ID

1. Find a YouTube video you want to use
2. Copy the video URL (e.g., `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
3. Click **Edit Video** on your site
4. Paste the URL in the input field
5. Click **Save Changes**
6. Done! The video updates immediately

### Option B: Short URL

1. Copy a short YouTube URL (e.g., `https://youtu.be/dQw4w9WgXcQ`)
2. Click **Edit Video**
3. Paste and click **Save Changes**

### Option C: Embed URL

1. Copy an embed URL (e.g., `https://www.youtube.com/embed/dQw4w9WgXcQ`)
2. Click **Edit Video**
3. Paste and click **Save Changes**

**All formats work! The system automatically converts them.**

---

## 🗑️ How to Reset Video

1. Click **Delete Video** button
2. Confirm the action in the popup
3. Video resets to the default

---

## ❓ Troubleshooting

### "I don't see the Edit/Delete buttons"

**Possible causes:**

1. You're not signed in → **Sign in first**
2. You haven't set the admin role → **Check Clerk dashboard**
3. You didn't refresh after setting role → **Sign out and back in**
4. Role value is wrong → **Must be exactly `"admin"` (lowercase)**

### "Video doesn't persist after closing browser"

**This is expected!**

- Videos are stored in browser localStorage
- For permanent storage across devices, we need to implement a database
- See `IMPLEMENTATION_SUMMARY.md` for database setup info

### "How do I make someone else an admin?"

1. They need to create an account first
2. Go to Clerk Dashboard → Users
3. Find their account
4. Add `{"role": "admin"}` to their public metadata
5. They need to sign out and back in

### "Can I have multiple admins?"

**Yes!** Just repeat the process for each user you want to make an admin.

---

## 📖 More Documentation

- **`README.md`** - Project setup and overview
- **`ADMIN_SETUP.md`** - Detailed admin configuration guide
- **`IMPLEMENTATION_SUMMARY.md`** - Technical details and future enhancements

---

## 💡 Pro Tips

1. **Test with two accounts**: Create one admin and one regular user to see the difference
2. **Keep your role lowercase**: Use `"admin"` not `"Admin"` or `"ADMIN"`
3. **Sign out/in after role changes**: Clerk sessions need to refresh
4. **Bookmark Clerk Dashboard**: You'll use it often for user management

---

## 🎯 What You Can Do Now

As an admin, you can:

- ✅ Change the YouTube video on your homepage
- ✅ Reset to default video
- ✅ Switch videos as often as you like
- ✅ Test different content instantly

---

**Need help?** Check the other documentation files or review the code in:
`src/components/pages/YtVideo.tsx`
