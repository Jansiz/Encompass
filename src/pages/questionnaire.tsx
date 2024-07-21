import { useEffect } from 'react';

const Questionnaire = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-fontColor">
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div data-tf-live="01J39GMB36TP5SH8Q437J0J3CC" className="w-full h-full"></div>
      </main>
      <footer className="w-full p-4 bg-background shadow-md text-center">
        <p className="text-sm text-secondaryText">&copy; 2024 Encompass. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Questionnaire;