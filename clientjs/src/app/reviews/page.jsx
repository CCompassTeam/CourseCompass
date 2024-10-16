// pages/review.js
"use client";
import { useState, useEffect } from 'react';
import Rating from './Rating/Rating';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation'

const Review = () => {
  const [routerReady, setRouterReady] = useState(false);
  const router = useRouter();
  const [difficultRatingValue, setDifficultRatingValue] = useState(undefined);
  const [usefulRatingValue, setUsefulRatingValue] = useState(undefined);

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    fullName: '',
    faculty: '',
    course: searchParams.get('courseCode'),
    difficulty: '',
    usefulness: '',
    courseExperience: '',
    professor: '',
    clarity: '',
    engagement: '',
    professorExperience: '',
  });

  const [showCourseDropdown, setShowCourseDropdown] = useState(formData.course === null);

  useEffect(() => {
    console.log(formData.course);
    if (router.isReady) {
      setRouterReady(true);
    }
  }, [router.isReady]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("user_id");
    if (!userId) {
      alert("User not logged in");
      return;
    }
    const courseCode = formData.course;

    console.log('Submitting review:', formData, 'Difficultly Rating:', difficultRatingValue, 'Usefulness Rating:', usefulRatingValue);

    try {
      const response = await fetch('/api/reviews/addReview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: userId,
          courseCode: courseCode,
          difficultyRating: difficultRatingValue,
          usefulnessRating: usefulRatingValue,
          comment: formData.courseExperience
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Response:', result);
      alert('Review submitted successfully!');

      router.push(`/`); // Replace with your course page URL pattern
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review.');
    }
  };

  const handleDifficultRatingAction = (value) => {
    setDifficultRatingValue(value);
  };
  const handleUsefulRatingAction = (value) => {
    setUsefulRatingValue(value);
  };

  return (
    <div className="flex flex-col items-center p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Review: {(formData.course || '').toLocaleUpperCase()}</h1>
      <p className="mb-6">
        We care about student engagement and satisfaction and value your feedback.
        Help a friend and leave a review on a course you have taken previously and
        support other students by upvoting their reviews.
      </p>
      <form onSubmit={handleSubmit}>
        {showCourseDropdown ? (
          <div className="mb-4">
            <label htmlFor="course" className="block mb-1 font-semibold">
              Select a Course:
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded"
            >
              <option value="cmpt1">CMPT 1</option>
              <option value="cmpt2">CMPT 2</option>
              <option value="cmpt3">CMPT 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
        ) : (
          <div className="mb-1">
            
          </div>
        )}

        <div className="md:flex flex-row gap-8">
          <div className="mb-4">
            <label htmlFor="difficulty" className="block mb-1 font-semibold">
              How Difficult was this course?
            </label>
            <div className="ml-2 flex flex-row scale-110">
              <Rating
                iconSize="l"
                showOutOf={true}
                enableUserInteraction={true}
                onClick={handleDifficultRatingAction}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="usefulness" className="block mb-1 font-semibold">
              How Useful was this course?
            </label>
            <div className="ml-2 flex flex-row scale-110">
              <Rating
                iconSize="l"
                showOutOf={true}
                enableUserInteraction={true}
                onClick={handleUsefulRatingAction}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="courseExperience" className="block mb-1 font-semibold">
            (Optional) Describe your experience with the course:
          </label>
          <textarea
            id="courseExperience"
            name="courseExperience"
            value={formData.courseExperience}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="professor" className="block mb-1 font-semibold">
            What was your professor's name?
          </label>
          <input
            type="text"
            id="professor"
            name="professor"
            value={formData.professor}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
        </div>
        <div className="md:flex flex-row gap-4">
        <div className="mb-4">
          <label htmlFor="rating" className="block mb-1 font-semibold">
            How would you rate the clarity of your professor?
          </label>
          <div className="ml-2 flex flex-row scale-110">
          <Rating
            iconSize="l"
            showOutOf={true}
            enableUserInteraction={true}
            onClick={handleRatingAction}
          />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="engagement" className="block mb-1 font-semibold">
            How would you rate the engagement of your professor?
          </label>
          <div className="ml-2 flex flex-row scale-110">
          <Rating
            iconSize="l"
            showOutOf={true}
            enableUserInteraction={true}
            onClick={handleRatingAction}
          />
          </div>
        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="professorExperience" className="block mb-1 font-semibold">
            Describe your experience with the Professor:
          </label>
          <textarea
            id="professorExperience"
            name="professorExperience"
            value={formData.professorExperience}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
        </div> */}
        <button
          type="submit"
          className="bg-primary-blue hover:bg-primary-yellow hover:text-black text-white font-semibold py-2 px-4 rounded"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Review;
