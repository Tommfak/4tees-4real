import { useRef, useState } from "react";
import type { Product } from "@/lib/shop-types";
import { cn } from "@/lib/utils";

export function productImage(id: string) {
  return `/products/${id}.jpg?v=9`;
}

export function ProductShot({
  product,
  className,
  spin = false,
}: {
  product: Product;
  className?: string;
  spin?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const rot = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const [deg, setDeg] = useState(0);

  if (failed) {
    return (
      <div className={cn("grid h-full w-full place-items-center bg-photo", className)} aria-hidden>
        <div
          className="grid h-28 w-16 place-items-center rounded-md text-center text-[10px] font-semibold"
          style={{ background: product.visual.body, color: product.visual.ink }}
        >
          {product.brand}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("relative grid h-full w-full place-items-center overflow-hidden bg-photo shot-shine", className)}
      style={{ perspective: 800 }}
      onPointerDown={
        spin
          ? (e) => {
              dragging.current = true;
              lastX.current = e.clientX;
              (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
            }
          : undefined
      }
      onPointerMove={
        spin
          ? (e) => {
              if (!dragging.current) return;
              rot.current += (e.clientX - lastX.current) * 0.4;
              lastX.current = e.clientX;
              setDeg(rot.current);
            }
          : undefined
      }
      onPointerUp={spin ? () => { dragging.current = false; } : undefined}
    >
      <img
        src={productImage(product.id)}
        alt={`${product.name} ${product.sizeLabel}`}
        width={360}
        height={480}
        decoding="async"
        draggable={false}
        onError={() => setFailed(true)}
        className={cn(
          "h-full w-full select-none object-contain p-3 outline outline-1 -outline-offset-1 outline-black/10",
          !spin && "shot-float",
        )}
        style={
          spin
            ? { transform: `rotateY(${deg}deg)`, transformStyle: "preserve-3d", pointerEvents: "none" }
            : { pointerEvents: "none" }
        }
      />
    </div>
  );
}
