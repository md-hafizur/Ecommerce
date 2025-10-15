"use client";
import { electronicsHeader} from "./storeHeader";
import StoreHeader from "./header";

export default function storeHeader() {
  return <StoreHeader storeHeaderData={electronicsHeader} />;
}