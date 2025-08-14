
import React from 'react';
import { Badge, } from '~/components/ui/badge';
import { Button, } from '~/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage, } from '~/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from '~/components/ui/dropdown-menu';
import { MoreHorizontal, Mail, Phone, ExternalLink, Edit, Trash2, Star, Calendar, MapPin, } from 'lucide-react';
// 1. Narrow with badges

  export  const StackedListsNarrowWithBadges = () => (
    <div className="bg-background shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user.id}>
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-foreground">{user.name}</div>
                      <div className="ml-2">
                        <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                          {user.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{user.title}</div>
                  </div>
                </div>
                <Badge variant="outline">{user.role}</Badge>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );