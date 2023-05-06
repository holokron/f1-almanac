import { Children, type PropsWithChildren } from "react";

export default function Breadcrumbs({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <div className="breadcrumbs">
      <ul>
        {Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </div>
  );
}
