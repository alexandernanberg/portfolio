import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Alexander Nanberg' },
    {
      name: 'description',
      content:
        'Software engineer with a passion for building delightful user experiences',
    },
  ]
}

export default function Index() {
  return (
    <div className="max-w-[620px] mx-auto p-6 py-32">
      <header className="mb-8 flex gap-3 items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="size-9 text-white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.2802 2.58022C7.49094 3.4529 6.74791 5.61083 7.62059 7.40009L13.9411 20.3591C14.8138 22.1483 16.9717 22.8914 18.761 22.0187C20.5502 21.146 21.2933 18.9881 20.4206 17.1988L14.1001 4.23983C13.2274 2.45057 11.0695 1.70754 9.2802 2.58022Z"
            fill="currentColor"
          />
          <path
            d="M2.00049 18.7529C2.00049 20.7436 3.6143 22.3574 5.60503 22.3574C7.59577 22.3574 9.20958 20.7436 9.20958 18.7529C9.20958 16.7621 7.59577 15.1483 5.60503 15.1483C3.6143 15.1483 2.00049 16.7621 2.00049 18.7529Z"
            fill="currentColor"
          />
        </svg>

        <div className="flex flex-col gap-1.5">
          <h1 className="font-medium leading-none">Alexander Nanberg</h1>
          <span className="text-gray-400 block leading-none">
            Senior Software Engineer
          </span>
        </div>
      </header>
      <p className="mt-3 text-gray-400">
        Senior software engineer based in Örebro, Sweden. I craft delightful
        interfaces by blending creativity with meticulous attention to detail,
        always aiming to push the boundaries of the user experience.
      </p>

      <h3 className="font-medium mt-12 mb-6">Connect</h3>
      <div className="flex gap-4">
        <a
          href="https://github.com/alexandernanberg"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-gray-400 hover:text-white"
        >
          <span>GitHub</span> ↗
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-nanberg-5b9864115/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-gray-400 hover:text-white"
        >
          <span>LinkedIn</span> ↗
        </a>
        <a
          href="https://dribbble.com/alexandernanberg"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-gray-400 hover:text-white"
        >
          <span>Dribbble</span> ↗
        </a>
      </div>
    </div>
  )
}
