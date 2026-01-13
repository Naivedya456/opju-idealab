import Link from "next/link";

export function CallToAction() {
    return (
        <div className="bg-primary-blue">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Have an innovative idea?
                        <br />
                        Let's build it together.
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                        The IDEA LAB provides the resources, mentorship, and support you need to take your project from concept to prototype. Visit us to get started.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-blue-100">
                            Visit Us <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
