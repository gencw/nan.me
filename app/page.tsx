import { BlogPosts } from "@/app/components/posts";
import { CustomMDX } from "./components/mdx";
export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">个人简介</h1>
      <CustomMDX
        source={`
### **我是姬方**
为什么会觉得编程难？自我真正略懂开发以来，我得到一个答案，万变不离其宗，一通百通。为什么会觉得难？是因为你并没有接触过，如果让你吃饭你还会觉得难吗？很简单。为什么会有这种感觉？因为我从你们你们中来，最开始我也是一窍不通，视频看几分钟就累了，不想看了，我以为是我的问题，直到后来才发现并非如此，最大的原因是大多数人录制视频时忘了最初的自己蹒跚学步，我们每个人都是人中龙飞，一切只是你并未接触过才会觉得无法逾越，当你踏上山巅时发现不过如此，英雄我也是英雄，标准我也是标准。


**领域**


• 全栈开发

• 移动应用  

• AI大模型

**技术栈**  


• 前端：React、Next.js 

• 后端：Hono.js、Java 

• 移动：React Native、SwiftUI、Harmony
`}
      />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
