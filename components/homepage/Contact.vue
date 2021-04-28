<template>
    <section id="contact" class="relative overflow-hidden">
        <svg
            class="absolute top-0 transform -translate-x-1/2 left-full -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/4 lg:translate-y-1/4"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
        >
            <defs>
                <pattern
                    id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                >
                    <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        class="text-secondaryColor opacity-30"
                        fill="currentColor"
                    />
                </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
        </svg>
        <div class="relative max-w-6xl mx-auto lg:grid lg:grid-cols-5">
            <div class="px-4 py-8 sm:px-6 lg:col-span-2 lg:px-6 lg:py-24 xl:pr-8">
                <div class="max-w-lg mx-auto">
                    <h2
                        class="text-2xl font-medium leading-8 text-headerDark sm:text-5xl sm:leading-9"
                    >
                        <span class="script-font text-primaryColor">Get In Touch!</span>
                    </h2>
                    <dl class="mt-6 text-base leading-6 text-bodyCopyDark">
                        <div>
                            <dt class="sr-only">Postal address</dt>
                            <dd>
                                <p>92 Church Street</p>
                                <p>Montclair, NJ 07042</p>
                            </dd>
                        </div>
                        <div class="mt-6">
                            <dt class="sr-only">Email</dt>
                            <dd class="flex">
                                <!-- Heroicon name: mail -->
                                <svg
                                    class="flex-shrink-0 w-6 h-6 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span class="ml-3"> nicole@nicoledandreaconsulting.com </span>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div class="px-4 py-8 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-8">
                <div class="max-w-lg mx-auto lg:max-w-none">
                    <form
                        name="contact-form"
                        method="post"
                        action="/thank-you"
                        netlify
                        netlify-honeypot="bot-field"
                        data-netlify-recaptcha="true"
                        class="grid grid-cols-1 px-6 py-8 rounded-lg shadow-xl gap-y-6"
                    >
                        <input type="hidden" name="form-name" value="contact-form" />
                        <div class="hidden">
                            <label for="bot-field">Don’t fill this out if you're human:</label>
                            <input name="bot-field" />
                        </div>
                        <div>
                            <label for="full_name" class="sr-only">Full name</label>
                            <div class="relative rounded-md shadow-sm">
                                <input
                                    id="full_name"
                                    name="Full name"
                                    class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                                    placeholder="Full name"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label for="email" class="sr-only">Email</label>
                            <div class="relative rounded-md shadow-sm">
                                <input
                                    id="email"
                                    type="email"
                                    name="Email"
                                    class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label for="phone" class="sr-only">Phone</label>
                            <div class="relative rounded-md shadow-sm">
                                <input
                                    id="phone"
                                    name="Phone"
                                    class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                                    placeholder="Phone"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label for="message" class="sr-only">Message</label>
                            <div class="relative rounded-md shadow-sm">
                                <textarea
                                    id="message"
                                    rows="4"
                                    name="Message"
                                    class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div data-netlify-recaptcha="true" class="field"></div>
                        <div class="">
                            <span class="inline-flex rounded-md shadow-sm">
                                <button
                                    type="submit"
                                    class="inline-flex justify-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent rounded-md bg-primaryColor hover:bg-primaryColorDark focus:outline-none focus:border-secondaryColor focus:shadow-outline-pink active:bg-secborder-secondaryColor"
                                >
                                    Submit
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>
