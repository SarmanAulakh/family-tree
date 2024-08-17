import { Handle, Position } from "reactflow";

export interface IFamilyNode {
  label: string;
  image?: string;
}

export default function FamilyNode({ data }: { data: IFamilyNode }) {
  return (
    <div
      style={{
        padding: 10,
        borderRadius: 5,
        background: "#fff",
        border: "1px solid #ddd",
      }}
    >
      <Handle type="target" position={Position.Top} />
      <div>{data.label}</div>
      {data.image && (
        <img
          src={data.image}
          alt={data.label}
          style={{ width: 50, height: 50, objectFit: "cover" }}
        />
      )}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
