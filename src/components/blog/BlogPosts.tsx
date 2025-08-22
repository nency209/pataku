import Image from "next/image"

export default function BlogPosts() {
    const posts = [
        {
            title: "Numpam voluptatem quat",
            image: "/img/blog_1_d2c1f6a3-df38-4a49-a6af-0ebfe2e04f7f_1024x1024.jpg"

        },
        {
            title: "Repellendus rem deserunt vitae",
            image: "/img/blog_8_1024x1024.jpg"
        },
        {
            title: "Vitae alias ullam voluptatibus",
            image: "/img/blog_9_1024x1024.jpg"
        }
    ]

    return (
        <section className="py-8 md:py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-[32px] font-bold font-lato text-black mb-2">Our <span className="italic text-[32px] font-light font-lato text-black">Blog</span>  Posts</h2>
                    <p className="text-muted font-rubik font-light text-base">Do you want to present posts in the best way to highlight interesting moments of your blog?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <div key={index} className="overflow-hidden ">
                            <div className="aspect-[4/3] flex items-center justify-center ">
                              <Image src={post.image} alt={post.title} width={400} height={300} className="object-contain transition-colors duration-300 hover:brightness-50"/>
                            </div>
                         
                            <div className="pb-3">
                                <h3 className="text-black font-rubik font-light text-base text-hover hover:cursor-pointer">{post.title}</h3>
                            </div>
                            <div className="border border-color w-12  hover:cursor-pointer "></div>
                            <div className="pt-2">
                                <button  className="text-muted font-rubik font-light text-sm text-hover hover:cursor-pointer">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
