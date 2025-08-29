import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getAvatarUrl, getInitials } from '@/lib/utils';

type UserAvatarProps = {
  name?: string;
  gender?: 'male' | 'female' | 'other';
  imageUrl?: string | null;
  className?: string;
};

export function UserAvatar({ 
  name = 'User', 
  gender = 'other', 
  imageUrl, 
  className 
}: UserAvatarProps) {
  const avatarUrl = imageUrl || getAvatarUrl(gender, name);
  const initials = getInitials(name);

  return (
    <Avatar className={className}>
      <AvatarImage src={avatarUrl} alt={name} />
      <AvatarFallback className="bg-muted">
        {initials}
      </AvatarFallback>
    </Avatar>
  );
}
