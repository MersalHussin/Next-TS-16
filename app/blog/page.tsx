import Link from "next/link"

const BlogPage = () =>{
    return(
        <div>
            <Link href ="http://localhost:3000/blog/frist-blog?lang=en&filter=java">
            Frist Blog
            </Link> 
            <Link href ="http://localhost:3000/blog/second-blog?lang=ar&filter=react">
            Second Blog
            </Link> 
            <Link href ="http://localhost:3000/blog/third-blog?lang=en&filter=js">
            Third Blog
            </Link> 
        </div>
    )

}

export default BlogPage