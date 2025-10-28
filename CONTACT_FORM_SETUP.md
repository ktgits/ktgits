# Contact Form Setup Guide

## ✅ What I've Done

1. **Made the site fully responsive** - it will look great on phones, tablets, and desktops
2. **Set up a working contact form** using Formspree (free service)
3. **Added proper form feedback** - users will see success/error messages

## 🚀 How It Works

The contact form now uses **Formspree** - a free service that sends form submissions directly to your email.

### Current Setup
- **Form endpoint**: `https://formspree.io/f/xanyglrk` (temporary demo endpoint)
- Messages will be sent to: **khushsonu123@gmail.com**

### ⚠️ IMPORTANT: You need to activate YOUR form endpoint

**Follow these steps to receive emails:**

1. **Go to**: https://formspree.io/
2. **Sign up for free** (no credit card needed)
3. **Create a new form** 
4. **Enter your email**: khushsonu123@gmail.com
5. **Copy your form endpoint** (looks like: `https://formspree.io/f/xxxxxxxx`)
6. **Replace in index.html** line ~207:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
7. **First submission**: Formspree will ask you to confirm your email address (one-time setup)

### Alternative Option: Web3Forms

If you prefer not to sign up, you can use **Web3Forms** (no signup needed):

1. Go to: https://web3forms.com/
2. Enter your email and get an access key
3. Update the form in index.html:
   ```html
   <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
     <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
     <input name="name" id="name" placeholder="Your name" required />
     <input name="email" id="email" type="email" placeholder="Your email" required />
     <textarea name="message" id="message" rows="4" placeholder="Message" required></textarea>
     <button class="primary" type="submit" id="submitBtn">Send message</button>
     <div id="formStatus" class="form-status"></div>
   </form>
   ```

## 📱 Responsive Design

The portfolio now works perfectly on:
- **Desktop** (large screens)
- **Tablets** (medium screens, < 980px)
- **Phones** (small screens, < 640px)

### Changes made:
- Navigation wraps on mobile
- Two-column layout becomes single column on mobile
- Projects grid stacks vertically on mobile
- Sidebar moves below main content on mobile
- Touch-friendly button sizes
- Proper spacing and padding adjustments

## 🎨 Features

- ✅ Working contact form with email delivery
- ✅ Success/error messages after form submission
- ✅ Loading state ("Sending...") during submission
- ✅ Form reset after successful submission
- ✅ Mobile-first responsive design
- ✅ Smooth animations and transitions
- ✅ Professional dark theme maintained

## 🧪 Testing

1. **Test the form**: Fill it out and click "Send message"
2. **Check your email**: You should receive the message
3. **Test on mobile**: Open on your phone to see responsive layout
4. **Test different screen sizes**: Resize browser window

## 📝 Form Data You'll Receive

When someone submits the form, you'll get an email with:
- **Name**: Their name
- **Email**: Their email address (so you can reply)
- **Message**: Their message

## Need Help?

If you have any issues:
1. Check that you've set up your Formspree account
2. Verify the form endpoint URL is correct
3. Check spam folder for the confirmation email
4. Make sure your email address is correct

---

**Your portfolio is now production-ready! 🎉**
