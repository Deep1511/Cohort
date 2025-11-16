import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/makingChai')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/makingChai"!</div>
}
