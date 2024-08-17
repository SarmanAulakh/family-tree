import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  MiniMap,
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";
import FamilyNode, { IFamilyNode } from "./family-node";

export default function FamilyTree() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodeName, setNodeName] = useState("");
  const [nodeImage, setNodeImage] = useState("");

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = () => {
    const familyNodeData: IFamilyNode = { label: nodeName, image: nodeImage };
    const newNode = {
      id: Date.now().toString(),
      type: "familyNode",
      data: familyNodeData,
      position: { x: Math.random() * 500, y: Math.random() * 500 },
    };
    setNodes((nds) => nds.concat(newNode));
    setNodeName("");
    setNodeImage("");
  };

  const saveToLocalStorage = () => {
    const data = {
      nodes,
      edges,
    };
    localStorage.setItem("familyTreeData", JSON.stringify(data));
    alert("Family tree saved successfully!");
  };

  const loadFromLocalStorage = () => {
    const savedData = localStorage.getItem("familyTreeData");
    if (savedData) {
      const { nodes: savedNodes, edges: savedEdges } = JSON.parse(savedData);
      setNodes(savedNodes);
      setEdges(savedEdges);
      alert("Family tree loaded successfully!");
    } else {
      alert("No saved family tree found!");
    }
  };

  // Load data from localStorage on component mount
  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex gap-8 p-5">
        <input
          value={nodeName}
          onChange={(e) => setNodeName(e.target.value)}
          placeholder="Enter name"
        />
        <input
          value={nodeImage}
          onChange={(e) => setNodeImage(e.target.value)}
          placeholder="Enter image URL"
        />
        <button onClick={addNode}>Add Node</button>
        <button onClick={saveToLocalStorage}>Save Tree</button>
        <button onClick={loadFromLocalStorage}>Load Tree</button>
      </div>
      <ReactFlow
        className="flex-1"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={{
          familyNode: FamilyNode,
        }}
        proOptions={{ hideAttribution: true }}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
