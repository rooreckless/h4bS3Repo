import { describe, expect, it, vi } from "vitest";
import { getCurrentDateString } from "../utils/utils";

describe("getCurrentDateString", () => {
  it("should return the correct date format (YYYY-MM-DD)", () => {
    // モックデータをセット
    const mockDate = new Date("2024-11-23T12:34:56Z");
    vi.setSystemTime(mockDate); // 現在の時間をモック

    // 実行
    const result = getCurrentDateString();

    // 検証
    expect(result).toBe("2024-11-23");

    // モック解除
    vi.useRealTimers();
  });

  it("should handle single-digit months and days correctly", () => {
    // モックデータ（2024-01-09）
    const mockDate = new Date("2024-01-09T00:00:00Z");
    vi.setSystemTime(mockDate);

    const result = getCurrentDateString();
    expect(result).toBe("2024-01-09");

    vi.useRealTimers();
  });
});
