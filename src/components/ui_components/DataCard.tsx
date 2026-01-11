import { Card, CardActions, CardContent, CardProps, Typography } from '@mui/material'
import React from 'react'

export interface DataCardProps extends CardProps{
    title: string;
    subtitle?: string;
    content?: string;
    actions?: React.ReactNode;
    elevations?: number
}
export const DataCard: React.FC<DataCardProps> = ({
    title,
    subtitle,
    content,
    actions,
    elevations=2,
    ...cardProps
})=>{
  return (
    <Card {...cardProps} elevation={elevations}>
        <CardContent>
            <Typography variant='h5' component='div' >
                {title}
            </Typography>
            {subtitle && (
                <Typography variant='body2' color='text.secondary'> 
                    {subtitle}
                </Typography>
                )
            }
           {content && (
                    <Typography variant='body1' component='div'>
                        {content}
                    </Typography>
             )
            }   
        </CardContent>
        {actions && <CardActions>{actions}</CardActions>}
    </Card>
  )
}

