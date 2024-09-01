import React from 'react';
import ReactMarkdown from 'react-markdown';
import { FaAngleLeft } from "react-icons/fa";
const Docs = () => {
    return (
      <section className="container mx-auto mx-w-7xl">
      <a href="/" className="flex p-4 items-center">
        <FaAngleLeft className="text-2xl text-green-800" />
        <span className="text-green-800 text-xl font-semibold">Back to Home</span>
      </a>
        <div className="max-w-3xl mx-auto p-10 bg-gradient-to-r from-green-100 to-green-200 rounded-xl shadow-2xl">
          
            <h1 className="text-4xl font-extrabold text-center text-green-800 mb-8">
                Hello Developers!
            </h1>
            <div className="prose prose-xl max-w-none text-gray-800 leading-loose">
                <ReactMarkdown>
                    {`
How to Install Tailwind CSS in Vite

Follow these steps to set up Tailwind CSS in a Vite project:

1. **Create a Vite Project**  
   First, you need to create a new Vite project. You can do this by running the following command:

   \`\`\`bash
   npm create vite@latest my-vite-project
   \`\`\`

   Navigate into your project directory:

   \`\`\`bash
   cd my-vite-project
   \`\`\`

2. **Install Tailwind CSS**  
   Next, install Tailwind CSS and its dependencies via npm:

   \`\`\`bash
   npm install -D tailwindcss postcss autoprefixer
   \`\`\`

   Then, generate the \`tailwind.config.js\` and \`postcss.config.js\` files:

   \`\`\`bash
   npx tailwindcss init -p
   \`\`\`

3. **Configure \`tailwind.config.js\`**  
   In the generated \`tailwind.config.js\` file, set the \`content\` property to include your source files:

   \`\`\`javascript
   module.exports = {
     content: [
       './index.html',
       './src/**/*.{js,ts,jsx,tsx}',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   \`\`\`

4. **Add Tailwind Directives to \`index.css\`**  
   Open the \`index.css\` file in your \`src\` directory and add the following Tailwind directives:

   \`\`\`css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   \`\`\`

5. **Start Your Vite Project**  
   Finally, start your development server:

   \`\`\`bash
   npm run dev
   \`\`\`

Your project should now be set up with Tailwind CSS!
                    `}
                </ReactMarkdown>
            </div>
        </div>
        </section>
    );
}

export default Docs;
