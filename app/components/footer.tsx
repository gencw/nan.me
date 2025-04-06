export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex   text-neutral-600 flex-row  dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://space.bilibili.com/390623643"
          >
            <p className="h-7">b站</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://v.douyin.com/KsBQwSW2JTE/ 4@1.com "
          >
            <p className="ml-2 h-7">抖音</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} 我是姬方.
      </p>
    </footer>
  );
}
