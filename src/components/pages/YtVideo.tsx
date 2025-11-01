"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Save, X } from "lucide-react";

const YtVideo = () => {
  const { user, isLoaded } = useUser();
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/embed/oFxSlioYJQI?si=yx2wymLRYruKM8ls"
  );
  const [isEditing, setIsEditing] = useState(false);
  const [newVideoUrl, setNewVideoUrl] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  // Load video URL from localStorage on mount
  useEffect(() => {
    const savedUrl = localStorage.getItem("videoUrl");
    if (savedUrl) {
      setVideoUrl(savedUrl);
    }
  }, []);

  // Check if user is admin
  useEffect(() => {
    if (isLoaded && user) {
      // Check if user has admin role in public metadata
      const userRole = user.publicMetadata?.role as string | undefined;
      setIsAdmin(userRole === "admin");
    }
  }, [isLoaded, user]);

  const handleEdit = () => {
    setIsEditing(true);
    setNewVideoUrl(videoUrl);
  };

  const handleSave = () => {
    if (newVideoUrl.trim()) {
      // Convert regular YouTube URL to embed URL if needed
      let embedUrl = newVideoUrl;
      if (newVideoUrl.includes("youtube.com/watch?v=")) {
        const videoId = newVideoUrl.split("v=")[1]?.split("&")[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      } else if (newVideoUrl.includes("youtu.be/")) {
        const videoId = newVideoUrl.split("youtu.be/")[1]?.split("?")[0];
        embedUrl = `https://www.youtube.com/embed/${videoId}`;
      }

      setVideoUrl(embedUrl);
      localStorage.setItem("videoUrl", embedUrl);
      setIsEditing(false);
      setNewVideoUrl("");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewVideoUrl("");
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this video?")) {
      const defaultUrl =
        "https://www.youtube.com/embed/oFxSlioYJQI?si=yx2wymLRYruKM8ls";
      setVideoUrl(defaultUrl);
      localStorage.setItem("videoUrl", defaultUrl);
    }
  };

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center p-4 md:p-20 lg:p-40 gap-6">
      {/* Admin Controls */}
      {isAdmin && !isEditing && (
        <div className="flex gap-3 mb-4">
          <Button
            onClick={handleEdit}
            className="bg-[#FFD45C] hover:bg-[#FFD45C]/90 text-[#010101] font-semibold flex items-center gap-2"
          >
            <Edit className="w-4 h-4" />
            Edit Video
          </Button>
          <Button
            onClick={handleDelete}
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-50 font-semibold flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Delete Video
          </Button>
        </div>
      )}

      {/* Edit Form */}
      {isAdmin && isEditing && (
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-4">
          <h3 className="text-xl font-bold text-[#010101] mb-4">
            Edit Video URL
          </h3>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="videoUrl"
                className="block text-sm font-semibold text-[#010101] mb-2"
              >
                YouTube Video URL or Embed Code
              </label>
              <input
                id="videoUrl"
                type="text"
                value={newVideoUrl}
                onChange={(e) => setNewVideoUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=... or https://www.youtube.com/embed/..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#FFD45C] transition-colors"
              />
              <p className="text-xs text-gray-500 mt-2">
                Paste a YouTube video URL (e.g.,
                https://www.youtube.com/watch?v=VIDEO_ID) or an embed URL
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleSave}
                className="bg-[#010101] hover:bg-[#010101]/90 text-white font-semibold flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
              <Button
                onClick={handleCancel}
                variant="outline"
                className="border-[#010101] text-[#010101] hover:bg-gray-50 font-semibold flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Video Player */}
      <div className="w-full max-w-6xl">
        <iframe
          src={videoUrl}
          className="w-full aspect-video rounded-lg shadow-2xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Vaakya Foundation Video"
        ></iframe>
      </div>

      {/* Admin Badge */}
      {isAdmin && (
        <p className="text-sm text-gray-500 mt-4">
          ✨ You&apos;re viewing this as an administrator
        </p>
      )}
    </div>
  );
};

export default YtVideo;
