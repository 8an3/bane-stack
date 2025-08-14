import React from 'react';
import { Badge, } from '~/components/ui/badge';
import { Button, } from '~/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage, } from '~/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from '~/components/ui/dropdown-menu';
import { MoreHorizontal, Mail, Phone, ExternalLink, Edit, Trash2, Star, Calendar, MapPin, } from 'lucide-react';




  // 5. With inline links and actions menu
  export   const StackedListsWithInlineLinksAndActions = () => (
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
                    <div className="text-sm font-medium text-foreground">{user.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center space-x-4">
                      <span>{user.title}</span>
                      <a href={`mailto:${user.email}`} className="text-primary hover:text-indigo-900 flex items-center">
                        <Mail className="h-3 w-3 mr-1" />
                        Email
                      </a>
                      <a href={`tel:${user.phone}`} className="text-primary hover:text-indigo-900 flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </a>
                    </div>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule meeting
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Star className="h-4 w-4 mr-2" />
                      Add to favorites
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit contact
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
