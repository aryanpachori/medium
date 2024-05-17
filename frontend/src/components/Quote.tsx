export const Quote = () => {
  return (
    <div className="bg-gray-200 flex items-center justify-center h-screen">
      <main className="w-full max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <blockquote className="border-l-4 border-gray-300 pl-6 dark:border-gray-600">
            <p className="text-2xl font-medium leading-relaxed text-gray-900 dark:text-gray-100">
              <strong>
                “The customer service I received was exceptional. The support
                team went above and beyond to address my concerns.”
              </strong>
            </p>
            <footer className="mt-4 text-base text-gray-500 dark:text-gray-400">
              <div className="font-semibold">Jules Winnfield</div>
              <div>CEO, Acme Inc</div>
            </footer>
          </blockquote>
        </div>
      </main>
    </div>
  );
};
