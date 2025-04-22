import TVLogin from "../../../assets/TorsVei/TVLogin.png";
import TVSignup from "../../../assets/TorsVei/TVSignup.png";
import TVDashboard from "../../../assets/TorsVei/TVDashboard.png";
import TVNewPost from "../../../assets/TorsVei/TVNewPost.png";
import TVProfile from "../../../assets/TorsVei/TVProfile.png";

const Sameie = () => {
  return (
    <div className="w-[90%] mx-auto mt-10 space-y-12">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-2 text-black dark:text-white">Tors Vei 11A Sameie</h1>
        <p className="text-gray-600 dark:text-gray-300">
          A complete housing project solution for a Norwegian condominium board.
        </p>
      </div>

      {/* YouTube Video */}
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Tors Vei 11A Sameie Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-xl shadow-lg"
        ></iframe>
      </div>

      {/* Documentation */}
      <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Project Documentation</h2>

{/* Overview */}
<div className="mb-8">
  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Overview</h3>
  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
    <li>Community-based social media application for sharing updates within the housing area</li>
    <li>Inspired by Facebook functionality — supports text posts, images, and comments</li>
    <li>Built using React Native and styled with StyleSheet</li>
    <li>Designed for both Android and iOS platforms</li>
    <li>Computer-optimized layout available, making the app fully cross-platform</li>
    <li>Mobile-first, fully responsive design</li>
  </ul>
</div>

{/* Technical Stack */}
<div className="mb-8">
  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Tech Stack</h3>
  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
    <li>Firebase Authentication for secure user login/signup</li>
    <li>Firebase Realtime Database for syncing posts and user data</li>
    <li>Firebase Storage for handling image uploads</li>
    <li>Images uploaded using Blob via React Native's ImagePicker library</li>
  </ul>
</div>

{/* Real-time Features */}
<div className="mb-8">
  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Real-Time Post Rendering</h3>
  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
    <li>Posts reflect live changes to usernames — updates propagate instantly to all posts made by that user</li>
    <li>Profile image changes are reflected across all associated posts in real time</li>
    <li>Implemented by referencing dynamic user data via user ID, instead of storing static values per post</li>
    <li>Firebase listeners ensure that changes are visible to all connected users without requiring refresh</li>
  </ul>
</div>

{/* Security & Data Management */}
<div className="mb-8">
  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Security & Data Handling</h3>
  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
    <li>🔐 Mandatory login/signup to access any part of the application</li>
    <li>✏️ Users can only edit or delete their own posts — enforced via user ID matching</li>
    <li>
  🧼 When users change their profile image, the old image is automatically deleted to reduce storage usage and prevent clutter.  
  This behavior was intentionally implemented to keep the application lightweight for showcase purposes.  
  In a production environment, support for storing multiple profile images or image history can easily be added if needed.
</li>
  </ul>
</div>

      {/* Image Collage */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Screenshots</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <img src={TVLogin} alt="Login" className="rounded-lg shadow-md object-cover" />
          <img src={TVSignup} alt="Signup" className="rounded-lg shadow-md object-cover" />
          <img src={TVDashboard} alt="Dashboard" className="rounded-lg shadow-md object-cover" />
          <img src={TVNewPost} alt="New Post" className="rounded-lg shadow-md object-cover" />
          <img src={TVProfile} alt="Edit Profile" className="rounded-lg shadow-md object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Sameie;
