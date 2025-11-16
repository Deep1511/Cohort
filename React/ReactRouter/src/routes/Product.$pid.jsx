import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Product/$pid")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pid } = Route.useParams();
  return <div>This is my product :{pid}</div>;
}
