
import React from 'react';
import { Badge, } from '~/components/ui/badge';
import { Button, } from '~/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage, } from '~/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from '~/components/ui/dropdown-menu';
import { MoreHorizontal, Mail, Phone, ExternalLink, Edit, Trash2, Star, Calendar, MapPin, } from 'lucide-react';

  // 2. Narrow with small avatars
  export   const StackedListsNarrowWithSmallAvatars = () => (
    <div className="bg-background shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user.id}>
            <div className="px-4 py-3 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="text-xs">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-medium text-foreground">{user.name}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-sm text-muted-foreground">{user.lastActive}</div>
                  <div className={`h-2 w-2 rounded-full ${user.status === 'active' ? 'bg-green-400' : 'bg-gray-300'}`} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );