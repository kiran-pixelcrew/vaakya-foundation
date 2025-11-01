# Admin Setup Guide

## How to Set Up Admin Users with Clerk

This guide explains how to configure admin users in your Vaakya Foundation application using Clerk's user metadata feature.

### 1. Access Clerk Dashboard

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Select your application
3. Navigate to **Users** from the sidebar

### 2. Set Admin Role for a User

#### Method 1: Via Clerk Dashboard UI

1. Click on the user you want to make an admin
2. Scroll down to **Public metadata** section
3. Click **Edit**
4. Add the following JSON:

```json
{
  "role": "admin"
}
```

5. Click **Save**

#### Method 2: Via Clerk API

You can also set admin roles programmatically using the Clerk Backend API:

```typescript
import { clerkClient } from "@clerk/nextjs/server";

await clerkClient.users.updateUserMetadata(userId, {
  publicMetadata: {
    role: "admin",
  },
});
```

### 3. Verify Admin Access

1. Sign in to your application with the admin user account
2. Navigate to the video section
3. You should see **Edit Video** and **Delete Video** buttons
4. Only admin users will see these controls

### 4. Admin Features

Once a user is set as an admin, they can:

- ✅ **Edit Video URL**: Change the YouTube video displayed on the site
- ✅ **Delete Video**: Reset to default video
- ✅ **View Admin Badge**: See confirmation of admin status

### 5. Testing the Admin Feature

1. Create two user accounts:

   - One regular user
   - One admin user (set role in Clerk dashboard)

2. Sign in with the regular user:

   - You should NOT see edit/delete buttons

3. Sign in with the admin user:
   - You SHOULD see edit/delete buttons
   - Click "Edit Video" to change the video URL
   - Enter a YouTube URL (any format):
     - `https://www.youtube.com/watch?v=VIDEO_ID`
     - `https://youtu.be/VIDEO_ID`
     - `https://www.youtube.com/embed/VIDEO_ID`

### 6. Security Considerations

⚠️ **Important**: Currently, video URLs are stored in browser localStorage. This means:

- ✅ Quick and easy for development
- ✅ No backend database needed initially
- ❌ Video URLs are only stored per browser (not synced across devices)
- ❌ Clearing browser data will reset to default video

**Recommended for Production**:
Consider implementing a proper database (e.g., Prisma + PostgreSQL) to store video URLs permanently and sync across all users.

### 7. Adding More Admin Users

To add more administrators:

1. Go to Clerk Dashboard → Users
2. Select each user you want to make an admin
3. Add `{"role": "admin"}` to their public metadata
4. Save changes

### 8. Removing Admin Access

To remove admin privileges:

1. Go to Clerk Dashboard → Users
2. Select the user
3. Edit public metadata
4. Change to `{"role": "user"}` or remove the role field entirely
5. Save changes

---

## Future Enhancements

Consider implementing:

- 📊 **Database Storage**: Store video URLs in a database
- 🎥 **Multiple Videos**: Allow admins to manage a gallery of videos
- 📝 **Admin Dashboard**: Create a dedicated admin panel
- 📧 **Admin Notifications**: Email alerts when content is changed
- 📜 **Audit Logs**: Track who changed what and when
- 🔒 **Role-Based Permissions**: Add more granular permission levels

---

## Troubleshooting

### "I don't see admin buttons after setting the role"

1. Ensure you've saved the metadata in Clerk dashboard
2. Sign out and sign back in to refresh the user session
3. Check browser console for any errors
4. Verify the role is set correctly: it should be `"admin"` (lowercase)

### "Video URL doesn't persist after refresh"

- This is expected with localStorage
- Video URLs are stored per-browser
- For permanent storage, implement a database solution

### "How do I make myself the first admin?"

1. Create an account on your site
2. Note your email address
3. Go to Clerk Dashboard
4. Find your user by email
5. Add admin role to public metadata
6. Sign out and sign back in

---

For more information about Clerk metadata, visit:

- [Clerk Metadata Documentation](https://clerk.com/docs/users/metadata)
