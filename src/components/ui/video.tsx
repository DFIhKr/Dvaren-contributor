const VideoSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            See How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Watch our video to learn more about becoming a contributor.
          </p>
        </div>
        
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/zNNqrof8ty8" 
            title="Dvaren Contributor Video"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
