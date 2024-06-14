export default function Badge({ text }: { text: string }) {
  return (
    <div className="flex items-center rounded-full text-xs font-medium px-3 py-1 bg-slate-100 max-w-fit mr-1.5">
      {text}
    </div>
  )
}