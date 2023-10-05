import { Tooltip } from "@mantine/core";

interface ListTextProps {
  title?: string;
  array?: string[];
  shownCount?: number;
}

export default function ListText({
  title = "Other",
  array = [],
  shownCount = 0,
}: ListTextProps) {
  const shown = [...array].splice(0, shownCount);

  if (!array.length) return <p>-</p>;

  return (
    <Tooltip
      disabled={array.length <= 2}
      label={
        <div>
          <p>{title}:</p>
          <ol className="list-decimal pl-5">
            {array.map((str) => (
              <li key={str}>{str}</li>
            ))}
          </ol>
        </div>
      }
    >
      <p>
        {shown?.join(", ")}
        &nbsp;
        {array.length > shownCount && (
          <span className="text-primary3 font-semibold">
            +{array.length - shownCount} Lainnya
          </span>
        )}
      </p>
    </Tooltip>
  );
}
