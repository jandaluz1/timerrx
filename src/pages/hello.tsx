import { trpc } from "@/utils/trpc";

export default function HelloPage() {
  const hello = trpc.useQuery(["hello", { text: "Joe" }]);
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
    </div>
  );
}
