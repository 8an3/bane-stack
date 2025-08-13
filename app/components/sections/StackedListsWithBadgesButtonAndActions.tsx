
import React from 'react';
import { Badge, } from '~/components/ui/badge';
import { Button, } from '~/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage, } from '~/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from '~/components/ui/dropdown-menu';
import { MoreHorizontal, Mail, Phone, ExternalLink, Edit, Trash2, Star, Calendar, MapPin, } from 'lucide-react';


  // 4. With badges, button, and actions menu
  export   const StackedListsWithBadgesButtonAndActions = () => (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
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
                    <div className="flex items-center space-x-2">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <Badge variant={user.role === 'Owner' ? 'default' : user.role === 'Admin' ? 'secondary' : 'outline'}>
                        {user.role}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      {user.title} • <MapPin className="inline h-3 w-3" /> {user.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Star className="h-4 w-4 mr-2" />
                        Favorite
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
