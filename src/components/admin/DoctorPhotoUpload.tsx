'use client';

import { Camera, User } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface DoctorPhotoUploadProps {
  currentImageUrl?: string;
  onUpload: (base64: string) => void;
}

function DoctorPhotoUpload({
  currentImageUrl,
  onUpload,
}: DoctorPhotoUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const displayUrl = preview || currentImageUrl;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a JPEG, PNG, or WebP image.');
      return;
    }

    // Validate file size (2 MB max)
    if (file.size > 2 * 1024 * 1024) {
      alert('Image must be smaller than 2 MB.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setPreview(base64);
      onUpload(base64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="relative group size-24 rounded-full overflow-hidden border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer bg-muted/30"
      >
        {displayUrl ? (
          <Image
            src={displayUrl}
            alt="Doctor photo"
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center size-full">
            <User className="size-10 text-muted-foreground" />
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Camera className="size-5 text-white" />
        </div>
      </button>

      <span className="text-xs text-muted-foreground">
        Click to upload photo
      </span>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}

export default DoctorPhotoUpload;
