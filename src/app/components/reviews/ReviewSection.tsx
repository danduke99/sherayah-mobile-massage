"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import StarRating from "./StarReview";
import {
  cookie,
  playfairBold,
  playfairRegular,
  playfairSemiBold,
} from "../../styles/font/fonts";
import CloudinaryImage from "../CloudinaryImage";
import { images } from "../media/images";
import { useServices } from "../services/useServices";

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service?: string;
  serviceId?: string;
  createdAt: string;
};

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ReviewsSection() {
  const { services } = useServices();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // form state
  const [name, setName] = useState("");
  const [serviceId, setServiceId] = useState<string>("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  async function loadReviews() {
    setLoading(true);
    try {
      const res = await fetch("/api/reviews", { cache: "no-store" });
      const data = await res.json();
      setReviews(Array.isArray(data.reviews) ? data.reviews : []);
    } catch {
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReviews();
  }, []);

  const stats = useMemo(() => {
    if (!reviews.length) return { avg: 0, count: 0 };
    const count = reviews.length;
    const avg = reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / count;
    return { avg, count };
  }, [reviews]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          rating,
          comment,
          serviceId: serviceId || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error ?? "Unable to submit review.");
        return;
      }

      // If you are using moderation (approved=false), you can change this string:
      // "Thank you. Your review has been submitted and is pending approval."
      setSuccessMsg("Thank you. Your review has been submitted.");
      setName("");
      setServiceId("");
      setRating(5);
      setComment("");

      await loadReviews();
    } catch {
      setError("Unable to submit review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className={`relative w-full py-10 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#f6fbf8] ${playfairRegular.className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#bee5d7]/60 via-white to-[#bee5d7]/40 pointer-events-none" />

      <motion.div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#e7d882]/15 blur-3xl pointer-events-none"
        initial={{ opacity: 0.6, scale: 1 }}
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 right-[-150px] w-[700px] h-[700px] rounded-full bg-[#82a687]/20 blur-3xl pointer-events-none"
        initial={{ opacity: 0.55, y: 0 }}
        animate={{ opacity: [0.4, 0.7, 0.4], y: [0, -18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -top-28 -left-10 sm:left-0 pointer-events-none select-none"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: [0, 10, 0], opacity: [0.78, 0.58, 0.78] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <CloudinaryImage
          src={images.orchid}
          alt="Orchid decoration"
          width={520}
          height={520}
          className="h-[20rem] sm:h-[26rem] rotate-[22deg] opacity-25 blur-[1px]"
        />
      </motion.div>

      <motion.div
        className="absolute -bottom-10 -right-10 sm:right-0 pointer-events-none select-none"
        initial={{ y: 0, opacity: 0.38 }}
        animate={{ y: [0, -10, 0], opacity: [0.74, 0.54, 0.74] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <CloudinaryImage
          src={images.snake}
          alt="Plant decoration"
          width={520}
          height={520}
          className="h-[20rem] sm:h-[26rem] opacity-20 blur-[1px]"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-10 sm:top-12 w-[320px] sm:w-[520px] h-16 sm:h-20 rounded-full bg-[#e7d882]/20 blur-2xl pointer-events-none" />
          <p
            className={`relative text-[56px] sm:text-[72px] text-[#2c3e50] ${cookie.className}`}
          >
            Reviews
          </p>
          <p
            className={`relative mt-2 text-gray-600 text-sm sm:text-base ${playfairRegular.className}`}
          >
            Real experiences from clients who booked mobile massage services.
          </p>
        </div>

        {/* Summary + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Stats + List */}
          <div className="rounded-3xl border border-[#82a687]/30 bg-gradient-to-br from-[#f2fbf6]/90 via-white/50 to-[#e6f4ec]/60 backdrop-blur-md shadow-[0_20px_60px_rgba(64,93,63,0.18)] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p
                  className={`text-xl text-gray-800 ${playfairBold.className}`}
                >
                  Client Rating
                </p>

                <div className="mt-3 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#e7d882]/30 via-white to-[#bee5d7] border border-[#82a687]/30 px-4 py-3 shadow-[0_8px_20px_rgba(64,93,63,0.25)]">
                  <StarRating value={Math.round(stats.avg) || 0} size="md" />
                  <p className={`text-gray-700 ${playfairRegular.className}`}>
                    {stats.count ? (
                      <>
                        <span className="font-semibold">
                          {stats.avg.toFixed(1)}
                        </span>{" "}
                        / 5.0
                        <span className="text-gray-500">
                          {" "}
                          · {stats.count} review{stats.count > 1 ? "s" : ""}
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-500">No reviews yet</span>
                    )}
                  </p>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <p
                  className={`text-sm text-gray-500 ${playfairRegular.className}`}
                >
                  Newest first
                </p>
              </div>
            </div>

            <div className="mt-6 max-h-[420px] overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-[#82a687]/40 scrollbar-track-transparent">
              {loading ? (
                <p className={`text-gray-500 ${playfairRegular.className}`}>
                  Loading reviews…
                </p>
              ) : reviews.length === 0 ? (
                <div className="rounded-2xl bg-gradient-to-br from-[#bee5d7]/60 to-white border border-[#82a687]/30 p-5 shadow-sm">
                  <p className={`text-gray-700 ${playfairRegular.className}`}>
                    Be the first to leave a review.
                  </p>
                </div>
              ) : (
                reviews.slice(0, 6).map((r) => (
                  <div
                    key={r.id}
                    className="rounded-2xl bg-gradient-to-t from-[#e7d882]/30 via-white/90 to-[#bee5d7]/40 border border-[#82a687]/20 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className={`text-gray-800 ${playfairBold.className}`}
                        >
                          {r.name}
                        </p>
                        <div className="mt-1 flex items-center gap-2">
                          <StarRating value={r.rating} size="sm" />
                          <p
                            className={`text-xs underline text-[#2c3e50] ${playfairSemiBold.className}`}
                          >
                            {formatDate(r.createdAt)}
                            {r.service ? ` · ${r.service}` : ""}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p
                      className={`mt-3 text-gray-700 text-sm sm:text-base ${playfairRegular.className}`}
                    >
                      {r.comment}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right: Submit Form */}
          <div className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-6 sm:p-8">
            <p className={`text-xl text-gray-800 ${playfairBold.className}`}>
              Leave a Review
            </p>
            <p
              className={`mt-2 text-gray-600 text-sm ${playfairRegular.className}`}
            >
              Share your experience. Reviews help new clients feel confident
              booking.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  className={`block text-sm text-gray-700 ${playfairBold.className}`}
                >
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 w-full rounded-xl border border-gray-300/80 bg-white/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#82a687] ${playfairRegular.className}`}
                  placeholder="Your name"
                  maxLength={60}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block text-sm text-gray-700 ${playfairBold.className}`}
                  >
                    Service (optional)
                  </label>
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    className={`mt-1 w-full rounded-xl border border-gray-300/80 bg-white/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#82a687] ${playfairRegular.className}`}
                  >
                    <option value="">Select a service (optional)</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className={`block text-sm text-gray-700 ${playfairBold.className}`}
                  >
                    Rating
                  </label>
                  <div className="mt-2">
                    <StarRating value={rating} onChange={setRating} size="md" />
                  </div>
                </div>
              </div>

              <div>
                <label
                  className={`block text-sm text-gray-700 ${playfairBold.className}`}
                >
                  Comment
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className={`mt-1 w-full min-h-[120px] rounded-xl border border-gray-300/80 bg-white/80 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#82a687] ${playfairRegular.className}`}
                  placeholder="Write a short review (10–500 characters)"
                  minLength={10}
                  maxLength={500}
                  required
                />
                <p
                  className={`mt-1 text-xs text-gray-500 ${playfairRegular.className}`}
                >
                  {comment.length}/500
                </p>
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50/80 px-4 py-3">
                  <p
                    className={`text-sm text-red-700 ${playfairRegular.className}`}
                  >
                    {error}
                  </p>
                </div>
              )}

              {successMsg && (
                <div className="rounded-xl border border-green-200 bg-green-50/80 px-4 py-3">
                  <p
                    className={`text-sm text-green-700 ${playfairRegular.className}`}
                  >
                    {successMsg}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className={`w-full rounded-full bg-[#405d3f] hover:bg-[#2e4c2d] hover:cursor-pointer transition text-white py-3 px-6 disabled:opacity-60 disabled:cursor-not-allowed ${playfairBold.className}`}
              >
                {submitting ? "Submitting…" : "Submit Review"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
