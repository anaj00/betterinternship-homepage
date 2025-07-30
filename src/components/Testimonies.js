"use client";
import CardSwap, { Card } from "@/blocks/Components/CardSwap/CardSwap";

export default function Testimonies() {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
        className="border"
      >
        <Card>
          <h3>Card 1</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 2</h3>
          <p>Your content here</p>
        </Card>
        <Card>
          <h3>Card 3</h3>
          <p>Your content here</p>
        </Card>
      </CardSwap>
    </div>
  );
}
