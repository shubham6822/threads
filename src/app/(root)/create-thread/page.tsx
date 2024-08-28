import { fetchUser } from "@/actions/user.action";
import PostThread from "@/components/forms/PostThread";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


async function Page() {
    const user = await currentUser();
    if (!user) return null;

    // fetch organization list created by user
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");

    return (
        <>
            <h1 className='head-text'>Create Thread</h1>

            <PostThread userId={userInfo._id} />
        </>
    );
}

export default Page;