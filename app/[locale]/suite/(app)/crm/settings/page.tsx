"use client";

import { useState } from "react";
import { m } from "framer-motion";
import {
  Bell,
  Calendar,
  Check,
  Globe,
  Mail,
  Monitor,
  Moon,
  Palette,
  Plus,
  Shield,
  Slack,
  Smartphone,
  Sun,
  UserCog,
  Users,
  Zap,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageHeader } from "@/components/suite/ui/PageHeader";
import { useTheme, type Theme } from "@/components/suite/ThemeProvider";
import { demoUser, teamMembers } from "@/lib/suite/data/users";

const ROLE_LABELS: Record<string, string> = {
  admin: "Admin",
  manager: "Manager",
  sales: "Sales",
};

const TIMEZONES = [
  "Europe/Amsterdam",
  "Europe/London",
  "Europe/Berlin",
  "America/New_York",
  "America/Los_Angeles",
  "Asia/Singapore",
];

interface NotificationSetting {
  id: string;
  label: string;
  description: string;
  checked: boolean;
}

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  connected: boolean;
}

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  const [profile, setProfile] = useState({
    name: demoUser.name,
    email: demoUser.email,
    role: demoUser.role,
    timezone: "Europe/Amsterdam",
  });
  const [saved, setSaved] = useState(false);

  const [notifications, setNotifications] = useState<NotificationSetting[]>([
    {
      id: "email",
      label: "Email notifications",
      description: "Receive updates and digests via email.",
      checked: true,
    },
    {
      id: "push",
      label: "Push notifications",
      description: "Get notified in the browser about important events.",
      checked: false,
    },
    {
      id: "deals",
      label: "Deal updates",
      description: "Alerts when deals move stages or close.",
      checked: true,
    },
    {
      id: "tasks",
      label: "Task reminders",
      description: "Reminders for upcoming and overdue tasks.",
      checked: true,
    },
    {
      id: "ai",
      label: "AI suggestions",
      description: "Daily follow-up and pipeline suggestions.",
      checked: true,
    },
  ]);

  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: "email",
      name: "Email",
      description: "Sync with your email provider.",
      icon: <Mail className="h-5 w-5" />,
      connected: true,
    },
    {
      id: "calendar",
      name: "Calendar",
      description: "Connect Google or Outlook calendar.",
      icon: <Calendar className="h-5 w-5" />,
      connected: true,
    },
    {
      id: "slack",
      name: "Slack",
      description: "Send deal alerts to Slack channels.",
      icon: <Slack className="h-5 w-5" />,
      connected: false,
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      description: "Enable WhatsApp messaging for contacts.",
      icon: <Smartphone className="h-5 w-5" />,
      connected: true,
    },
    {
      id: "zapier",
      name: "Zapier",
      description: "Trigger workflows from CRM events.",
      icon: <Zap className="h-5 w-5" />,
      connected: false,
    },
  ]);

  const handleProfileSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const toggleNotification = (id: string) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const toggleIntegration = (id: string) => {
    setIntegrations((prev) =>
      prev.map((item) => (item.id === id ? { ...item, connected: !item.connected } : item))
    );
  };

  const handleInvite = () => {
    window.alert("Invite sent to new team member.");
  };

  const themeOptions: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: "light", label: "Light", icon: <Sun className="h-4 w-4" /> },
    { value: "dark", label: "Dark", icon: <Moon className="h-4 w-4" /> },
    { value: "system", label: "System", icon: <Monitor className="h-4 w-4" /> },
  ];

  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6 p-4 md:p-6"
    >
      <PageHeader title="Settings" description="Manage your account, team, and preferences." />

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-4 flex h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
          {[
            { value: "profile", label: "Profile", icon: <UserCog className="h-4 w-4" /> },
            { value: "notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
            { value: "team", label: "Team", icon: <Users className="h-4 w-4" /> },
            { value: "integrations", label: "Integrations", icon: <Globe className="h-4 w-4" /> },
            { value: "appearance", label: "Appearance", icon: <Palette className="h-4 w-4" /> },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="inline-flex items-center gap-2 rounded-lg border border-transparent px-4 py-2 data-[state=active]:border-border data-[state=active]:bg-card data-[state=active]:shadow-sm"
            >
              {tab.icon}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="profile" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCog className="h-5 w-5 text-primary" />
                Profile
              </CardTitle>
              <CardDescription>Update your personal information and timezone.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={demoUser.avatar} alt={profile.name} />
                  <AvatarFallback className="text-lg">
                    {profile.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{profile.name}</p>
                  <p className="text-sm text-muted-foreground">{profile.email}</p>
                  <Badge variant="secondary" className="mt-1">
                    {ROLE_LABELS[profile.role]}
                  </Badge>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(event) => setProfile({ ...profile, name: event.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(event) => setProfile({ ...profile, email: event.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" value={ROLE_LABELS[profile.role]} disabled />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={profile.timezone}
                    onValueChange={(value) => setProfile({ ...profile, timezone: value })}
                  >
                    <SelectTrigger id="timezone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {TIMEZONES.map((tz) => (
                        <SelectItem key={tz} value={tz}>
                          {tz.replace("_", " ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button onClick={handleProfileSave}>
                  {saved && <Check className="mr-2 h-4 w-4" />}
                  Save changes
                </Button>
                {saved && (
                  <span className="text-sm text-muted-foreground">Profile saved successfully.</span>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notifications
              </CardTitle>
              <CardDescription>Choose what you want to be notified about.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start justify-between gap-4 rounded-lg border p-4"
                >
                  <div className="space-y-0.5">
                    <Label htmlFor={item.id} className="text-base">
                      {item.label}
                    </Label>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <Switch
                    id={item.id}
                    checked={item.checked}
                    onCheckedChange={() => toggleNotification(item.id)}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Team members
              </CardTitle>
              <CardDescription>Manage access and invite new teammates.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-end">
                <Button onClick={handleInvite}>
                  <Plus className="mr-2 h-4 w-4" />
                  Invite member
                </Button>
              </div>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 text-left font-medium">Member</th>
                      <th className="px-4 py-3 text-left font-medium">Role</th>
                      <th className="px-4 py-3 text-left font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[demoUser, ...teamMembers].map((member) => (
                      <tr key={member.id} className="border-t">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={member.avatar} alt={member.name} />
                              <AvatarFallback>
                                {member.name
                                  .split(" ")
                                  .map((part) => part[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-muted-foreground">{member.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant="outline">{ROLE_LABELS[member.role]}</Badge>
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant={member.id === demoUser.id ? "default" : "secondary"}
                            className="gap-1"
                          >
                            <Shield className="h-3 w-3" />
                            {member.id === demoUser.id ? "Active" : "Active"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Integrations
              </CardTitle>
              <CardDescription>Connect the tools your team uses every day.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {integrations.map((integration) => (
                  <div
                    key={integration.id}
                    className="flex flex-col justify-between gap-4 rounded-lg border p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-md bg-primary/10 p-2 text-primary">
                        {integration.icon}
                      </div>
                      <div>
                        <p className="font-medium">{integration.name}</p>
                        <p className="text-sm text-muted-foreground">{integration.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant={integration.connected ? "default" : "outline"}>
                        {integration.connected ? "Connected" : "Disconnected"}
                      </Badge>
                      <Switch
                        checked={integration.connected}
                        onCheckedChange={() => toggleIntegration(integration.id)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                Appearance
              </CardTitle>
              <CardDescription>Choose how the app looks on your device.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setTheme(option.value)}
                    className={`flex flex-col items-center gap-3 rounded-xl border p-6 transition-colors hover:bg-muted/50 ${
                      theme === option.value
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border"
                    }`}
                  >
                    {option.icon}
                    <span className="text-sm font-medium">{option.label}</span>
                    {theme === option.value && <Check className="h-4 w-4" />}
                  </button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Current theme: <span className="font-medium text-foreground">{theme}</span>
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </m.div>
  );
}
