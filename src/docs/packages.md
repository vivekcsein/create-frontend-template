# Create the frontend project from scratch

<p>
Create a folder ( name = create_frontend_template)
</p>

<p>
Initialize the node project, create package.json using this terminal command, and choose a blank template.
</p>     
<p>

       bun create next-app@latest .

</p>

<p>
Initialize shadcn UI
</p>

<p>

       bun x --bun shadcn@latest init

</p>

<p>
Initialize Sass in our project
</p>

<p>

       bun add --dev sass prettier

</p>
<p>
       Copy paste it propery in nextjs.config
</p>

<p>

       import path from "path";
       import { fileURLToPath } from "url";

       const __filename = fileURLToPath(import.meta.url);
       const __dirname = path.dirname(__filename);

       // inside nextConfig objext copy paste below code
       sassOptions: {
              includePaths: [path.join(__dirname, "styles")],
       },

</p>

<p>To install all packages in one line
</p>

<p>

    bun add dotenv next-themes react-redux @reduxjs/toolkit

</p>
