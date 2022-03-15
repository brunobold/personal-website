import Link from 'next/link'

function Footer() {
    return (
        <footer className="p-4 bg-salmon rounded-t-xl shadow md:px-6 md:py-8 dark:bg-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
                <Link href="https://brunobold.com/" className="flex items-center mb-4 sm:mb-0">
                    {/* <img src="/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">BrunoBold</span>
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6">LinkedIn</Link>
                    </li>
                    <li>
                        <Link href="#" className="mr-4 hover:underline md:mr-6 ">Github</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8" />

            <div className="flex flex-row">
                <div className="basis-1/3">
                    <span className="text-white">💖 Made in London</span>
                </div>
                <div className="basis-1/3">
                    <span className="block text-sm text-white sm:text-center">© 2022 BrunoBold. All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;