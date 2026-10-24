function Contact() {
    return (
        <div className="min-h-[90vh] bg-gray-50 flex flex-col items-center px-10 pt-20 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                Git in Touch
            </h1>
            <p className="text-gray-500 text-xl ">
                Do you have a question or feedback? Send us a message
            </p>
            <form className="flex flex-col gap-4 mt-10" >
                <input type="text" placeholder="Your Name"
                    className=" border-2 border-cyan-600 rounded-xl p-2.5" />
                <input type="email" placeholder="Your Email"
                    className="border-2 border-cyan-600 rounded-xl p-2.5" />
                <textarea placeholder="Your Message"
                    className="border-2 border-cyan-600 rounded-xl p-2.5" >
                </textarea>
                <button type="submit" className="rounded-xl bg-blue-500 py-3 text-white border-0"  > Send Message </button>
            </form>

        </div>
    )
}
export default Contact;