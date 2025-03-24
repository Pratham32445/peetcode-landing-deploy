"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {} from "lucide-react";
import { toast } from "sonner";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-4xl">This Website is under Deployment</h1>
        <Input
          type="email"
          placeholder="Write your check to get notified when it is live"
          className="my-8 p-8"
        />
        <Button
          className="w-full"
          onClick={() => toast("we will notify you as this website goes live")}
        >
          Notify
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
